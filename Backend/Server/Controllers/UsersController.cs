using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Server.Interfaces;
using Server.Entities;
using Server.Models;

namespace Server.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase {
        public IUserServices _userServices;

        public UsersController(IUserServices userServices) {
            _userServices = userServices;
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<ActionResult<AuthResponse>> Register(User user) {
            var response = await _userServices.Register(user);
            
            if (response == null) return BadRequest("Пользователь с таким Email уже существует!");
            
            SetTokenCookie(response.RefreshToken);
            
            return Ok(response);
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<ActionResult<AuthResponse>> Login(User user) {
            var response = await _userServices.Login(user);

            if (response == null) return BadRequest("Пользователь с такими данными не найден!");

            SetTokenCookie(response.RefreshToken);
            
            return Ok(response);
        }

        [HttpPost("logout")]
        public async Task<ActionResult> Logout() {
            var refreshToken = ClearTokenCookie();
            var response = await _userServices.Logout(refreshToken);

            return Ok(response);
        }
        
        [HttpPost("verify")]
        public async Task<ActionResult<AuthResponse>> Verify(User user) {
            var response = await _userServices.Verify(user);

            if (response == null) return BadRequest("Пользователь с таким логином уже существует!");

            SetTokenCookie(response.RefreshToken);
            
            return Ok(response);
        }

        [HttpPost]
        public ActionResult<List<User>> GetPeople(PeopleRequest peopleRequest) {
            var response = _userServices.GetPeople(peopleRequest);
            return Ok(response);
        }

        private void SetTokenCookie(string token) {
            var cookieOptions = new CookieOptions() {
                Expires = DateTime.UtcNow.AddDays(30)
            };
            
            Response.Cookies.Append("refreshToken", token, cookieOptions);
        }

        private string GetTokenCookie() {
            string refreshToken = null;
            
            Request.Cookies.TryGetValue("refreshToken", out refreshToken);

            return refreshToken;
        }

        private string ClearTokenCookie() {
            string refreshToken = GetTokenCookie();
            
            Response.Cookies.Delete("refreshToken");

            return refreshToken;
        }
    }
}
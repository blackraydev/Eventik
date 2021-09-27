using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Server.Interfaces;

namespace Server.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class TokensController : ControllerBase {
        public ITokenServices _tokenServices;

        public TokensController(ITokenServices tokenServices) {
            _tokenServices = tokenServices;
        }
        
        [AllowAnonymous]
        [HttpGet("refresh")]
        public async Task<IActionResult> RefreshToken() {
            var refreshToken = GetTokenCookie();

            if (refreshToken == null) return Unauthorized("Пользователь не авторизован");
            
            var response = await _tokenServices.RefreshToken(refreshToken);
            
            SetTokenCookie(response.RefreshToken);
            
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
    }
}
<#macro registrationLayout>
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title><#nested "title"></title>
  </head>
  <body class="" style="background-color:#f5f5f7;font-family:HelveticaNeue,sans-serif;-webkit-font-smoothing:antialiased;font-size:16px;line-height:1.4;margin:0;padding:0;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;">
          <div class="content" style="box-sizing:border-box;display:block;max-width:510px;padding:30px;background-color:#fff;margin:0 auto;color:#5c646e">
          <img border="0" style="float:right;display:block" alt="Abacus" title="Abacus" width="163" height="36" src="https://cdn.frontify.com/api/screen/thumbnail/cSTO-Cuh1Oiu6gfdh4EI5MOeTPkUfjm5Sqc1T17DvYn6HNrLwON9fvyZ4ptH5zj_0Af76twWTe_MT6YSgVA9tw/814"/>
          <div style="clear:both;display:block;border:0;height:35px;margin:0;"></div>
          <h2 style="font-size: 22px; font-weight: bold;color:#2b2b2b;margin-top:0;margin-bottom:20px;"><#nested "title"></h2>
          <div style="margin-bottom: 27px;"><#nested "content"></div>
          <#if link??>
              <a href="${link}" style="background-color:#1677cb;color:#fff;text-decoration:none;height:36px;display:inline-block;line-height:36px;padding:0 22px;border-radius:4px;font-size:14px;margin-bottom: 15px;"><#nested "title"></a>
          </#if>
          <div style="font-size: 14px;line-height:1.43; color: #78838d"><#nested "contentAfter"></div>
          <p style="margin-top: 60px;font-size:11px;color:#78838d;border-top:1px solid #e4e5e7;text-align: center;padding-top: 30px;">&copy; Abacus Research AG</p>
          </div>
  </body>
</html>
</#macro>

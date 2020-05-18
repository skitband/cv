import React from 'react';

const VisitorCounter = () => {

   const nameDefined = (ckie,nme) =>
   {
      var splitValues
      var i
      for (i=0;i<ckie.length;++i)
      {
         splitValues=ckie[i].split("=")
         if (splitValues[0]===nme) return true
      }
      return false
   }

   const delBlanks = (strng) =>
   {
      var result=""
      var i
      var chrn
      for (i=0;i<strng.length;++i) {
         chrn=strng.charAt(i)
         if (chrn!==" ") result += chrn
      }
      return result
   }

   const getCookieValue = (ckie,nme) =>
   {
      var splitValues
      var i
      for(i=0;i<ckie.length;++i) {
         splitValues=ckie[i].split("=")
         if(splitValues[0]===nme) return splitValues[1]
      }
      return ""
   }

   const ReadCookie = () =>
   {
      var cookie=document.cookie
      var counter = 0;
      var chkdCookie=delBlanks(cookie)
      var nvpair=chkdCookie.split(";")
      if(nameDefined(nvpair,"pageCount"))
      counter=parseInt(getCookieValue(nvpair,"pageCount"))
      ++counter
      var futdate = new Date()
      var expdate = futdate.getTime()
      expdate += 3600000 * 24 *30
      futdate.setTime(expdate)
     
      var newCookie="pageCount="+counter
      newCookie += "; expires=" + futdate.toGMTString()
      window.document.cookie = newCookie

      return <span>Visitor Counter: {counter}</span>;
   }
   return(
      
      <div className="vcounter" style={{float:'right', marginTop: '10px', marginRight: '15px', color: '#ffffff'}}> 
         <span id="counter-text"> <ReadCookie /> </span> 
      </div>
   )
}

export default VisitorCounter;






 


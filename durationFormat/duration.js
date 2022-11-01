//best practice :D
function formatDuration (seconds) {
  
    const pluralizeYear = (count= int, time= string)=>`${count} ${count !== 1 ? time : 'year'}`;
    const pluralizeDay = (count= int, time= string)=>`${count} ${count !== 1 ? time : 'day'}`;
    const pluralizeHour = (count= int, time= string)=>`${count} ${count !== 1 ? time : 'hour'}`;
    const pluralizeMinute = (count= int, time= string)=>`${count} ${count !== 1 ? time : 'minute'}`;
    const pluralizeSecond = (count= int, time= string)=>`${count} ${count !== 1 ? time : 'second'}`;
      
      if(seconds/31536000 >= 1){
        years = Math.floor(seconds/31536000)
        days = Math.floor((seconds - (years * 31536000)) / 86400)
        hours = Math.floor((seconds - (years * 31536000) - (days * 86400)) / 3600)
        minutes = Math.floor((seconds - (years * 31536000) - (days * 86400) - (hours * 3600)) / 60) 
        secondss = seconds - (years * 31536000) - (days * 86400) - (hours*3600) - (minutes*60)
        let a = pluralizeYear(years, 'years')
        let b = pluralizeDay(days, 'days')
        let c = pluralizeHour(hours, 'hours')
        let d = pluralizeMinute(minutes, 'minutes')
        let e = pluralizeSecond(secondss, 'seconds')
        if(secondss == 0){
          return (a + ', ' + b + ', ' + c + ' and ' + d)
        }
        if(minutes == 0){
        return (a + ', ' + b + ', ' + c + ', ' + 'and ' + e)
          }
        if(hours == 0){
          return (a + ', ' + b + ', ' + d + ' and ' + e)
        }
          if(days == 0){
          return (a + ', ' + c + ', ' + d + ' and ' + e)
        }
        return(a + ', ' + b + ', ' + c + ', ' + d + ' and ' + e)
      }
      else if(seconds/86400 >= 1){
        days = Math.floor(seconds/86400)
        hours = Math.floor((seconds - (days * 86400))/3600)
        minutes = Math.floor((seconds -  (days * 86400) - (hours*3600))/60)
        secondss = seconds - (days * 86400) - (hours*3600) - (minutes*60)
        let b = pluralizeDay(days, 'days')
        let c = pluralizeHour(hours, 'hours')
        let d = pluralizeMinute(minutes, 'minutes')
        let e = pluralizeSecond(secondss, 'seconds')
        if(secondss == 0){
          return (b + ', ' + c + ' and ' + d)
        }
        if(minutes == 0){
        return (b + ', ' + c + ' and ' + e)
          }
        if(hours == 0){
          return (b + ', ' + d + ' and ' + e)
        }
        if(hours == 0 && seconds == 0){
          return(b + ' and ' + d)
        }
        return (b + ', ' + c + ', ' + d + ' and ' + e)
      }
      else if(seconds/3600 >= 1){
        hours = Math.floor(seconds/3600)
        minutes = Math.floor((seconds - (hours*3600))/60) 
        secondss = seconds - (hours*3600 + minutes*60)
        let c = pluralizeHour(hours, 'hours')
        let d = pluralizeMinute(minutes, 'minutes')
        let e = pluralizeSecond(secondss, 'seconds')
        if(secondss == 0 && minutes == 0){
          return(c)
        }
        else if(secondss == 0 && minutes != 0){
          return(c + ' and ' + d)
        }
        else if(minutes == 0 && secondss != 0){
        return(c + ' and ' + e)
        }
        return (c + ', ' + d + ' and '+ e)
      }
      else if (seconds/60 >= 1){
        minutes = Math.floor(seconds/60) 
        secondss = seconds - (minutes*60)
        let d = pluralizeMinute(minutes, 'minutes')
        let e = pluralizeSecond(secondss, 'seconds')
        if(secondss == 0){
          return(d)
        }
        return (d + ' and ' + e)
      }
      else{
        if(seconds > 1){
            return(`${seconds} seconds`)
          }
         else if(seconds == 1){
            return(`${seconds} second`)
          }
        else{
          return ('now')
        }
      }
    }
    

    /*
    function formatDuration (seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      res = [];

  if (seconds === 0) return 'now';
  
  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds/time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }
 
  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
    */
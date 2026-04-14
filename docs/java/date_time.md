# Java Date Time
* 📅 `2025/04/22 11:03` 
* 📍 `ShenZhen`
* 🏷️ `Original` `Java`

## 1st generation of date time
Import package
```java
import java.util.Date;
import java.text.SimpleDateFormat;
import java.text.ParseException;
```

### Get current date time
```java
Date date = new Date();
System.out.println(date);
```
```
Tue Apr 22 11:27:24 HKT 2025
```

### Format
```java
SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy hh:mm:ss E");
System.out.println(sdf.format(date));
```
```
04/22/2025 11:27:24 Tue
```

### Parse the formated string of date time to date class
```java
SimpleDateFormat sdf = new SimpleDateFormat("yyyy年MM月dd日 hh:mm:ss E");
Date date = sdf.parse("2025年04月21日 10:07:43 Mon");
```

## 2nd generation of date time
Import package
```java
import java.util.Calendar;
```

### Get current date time
```java
Calendar c = Calendar.getInstance();
System.out.println(c);
System.out.println("Year: " +  c.get(Calendar.YEAR));
System.out.println("Month: " +  (c.get(Calendar.MONTH) + 1));
System.out.println("DayOfMonth: " +  c.get(Calendar.DAY_OF_MONTH));
System.out.println("Hour: " +  c.get(Calendar.HOUR));
System.out.println("Minute: " +  c.get(Calendar.MINUTE));
System.out.println("Second: " +  c.get(Calendar.SECOND));
```
```
java.util.GregorianCalendar[time=1745293376003,areFieldsSet=true,areAllFieldsSet=true,lenient=true,zone=sun.util.calendar.ZoneInfo[id="Asia/Hong_Kong",offset=28800000,dstSavings=0,useDaylight=false,transitions=71,lastRule=null],firstDayOfWeek=1,minimalDaysInFirstWeek=1,ERA=1,YEAR=2025,MONTH=3,WEEK_OF_YEAR=17,WEEK_OF_MONTH=4,DAY_OF_MONTH=22,DAY_OF_YEAR=112,DAY_OF_WEEK=3,DAY_OF_WEEK_IN_MONTH=4,AM_PM=0,HOUR=11,HOUR_OF_DAY=11,MINUTE=42,SECOND=56,MILLISECOND=3,ZONE_OFFSET=28800000,DST_OFFSET=0]
Year: 2025
Month: 4
DayOfMonth: 22
Hour: 11
Minute: 42
Second: 56
```

## 3rd generation of date time
Import package
```java
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
```
`LocalDateTime` = `LocalDate` + `LocalTime`
### Get current date time
#### Default time zone
```java
LocalDateTime ldt = LocalDateTime.now();
System.out.println(ldt);
System.out.println("Year: " + ldt.getYear());
System.out.println("Month: " + ldt.getMonthValue());
System.out.println("Day: " + ldt.getDayOfMonth());
System.out.println("Hour: " + ldt.getHour());
System.out.println("Minute: " + ldt.getMinute());
System.out.println("Second: " + ldt.getSecond());
```
```
2025-04-22T13:02:52.317499600
Year: 2025
Month: 4
Day: 22
Hour: 13
Minute: 2
Second: 52
```

#### Specify time zone
```java
LocalDateTime ldt = LocalDateTime.now(ZoneId.of("Asia/Hong_Kong"));
System.out.println(ldt.getHour());
```
Query avalible time zone
```java
for (String zoneId : ZoneId.getAvailableZoneIds()) {
    System.out.println(zoneId);
}
```

### Format
```java
DateTimeFormatter dtf = DateTimeFormatter.ofPattern("MM/dd/yyyy HH:mm:ss E");
System.out.println(dtf.format(ldt));
```
```
04/22/2025 11:27:24 Tue
```

### Store the formatted time as an implementation object of the TemporalAccessor interface
```java
LocalDateTime ldt = LocalDateTime.from(dtf.parse("04/21/2025 10:07:43 Mon"));
System.out.println(ldt);
```

### Plus & subtract
```java
LocalDateTime ldt = LocalDateTime.now();
System.out.println(dtf.format(ldt));
LocalDateTime plusMinutes = ldt.plusMinutes(666);
LocalDateTime subtractMinutes = ldt.plusMinutes(-666);
System.out.println(dtf.format(plusMinutes));
System.out.println(dtf.format(subtractMinutes));
```
```
04/24/2025 09:53:22 Thu
04/24/2025 20:59:22 Thu
04/23/2025 22:47:22 Wed
```

## Timestamp object
Import packages
```java
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
```
### Get timestamp object
```java
Instant instant = Instant.now();
System.out.println(instant);
```
```
2025-04-24T02:24:51.457088700Z
```
### Interacting with the 1st generation
#### Parse to Date object
```java
Date date = Date.from(instant);
```
#### Convert back to Instant object
```java
Instant instant = date.toInstant();
```
### Interacting with the 3rd generation
#### Parse to LocalDateTime object
```java
LocalDateTime ldt = LocalDateTime.ofInstant(Instant.now(), ZoneId.systemDefault());
```
#### Parse to ZoneDateTime object
```java
ZonedDateTime zdt = ZonedDateTime.ofInstant(Instant.now(), ZoneId.systemDefault());
```
#### Convert back to Instant object
```java
ldt.atZone(ZoneId.systemDefault()).toInstant();
```

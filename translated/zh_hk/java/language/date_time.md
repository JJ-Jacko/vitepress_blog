## 第一代日期時間
匯入套件
```java
import java.util.Date;
import java.text.SimpleDateFormat;
import java.text.ParseException;
```

### 取得目前日期時間
```java
Date date = new Date();
System.out.println(date);
```
```
Tue Apr 22 11:27:24 HKT 2025
```

### 格式化
```java
SimpleDateFormat sdf = new SimpleDateFormat("yyyy年MM月dd日 hh:mm:ss E");
System.out.println(sdf.format(date));
```
```
2025年04月22日 11:27:24 Tue
```

### 將格式化的時間儲存為 Date 物件
```java
SimpleDateFormat sdf = new SimpleDateFormat("yyyy年MM月dd日 hh:mm:ss E");
Date date = sdf.parse("2025年04月21日 10:07:43 Mon");
```

## 第二代日期時間
匯入套件
```java
import java.util.Calendar;
```

### 取得目前日期時間
```java
Calendar c = Calendar.getInstance();
System.out.println(c);
System.out.println("年: " +  c.get(Calendar.YEAR));
System.out.println("月: " +  (c.get(Calendar.MONTH) + 1));
System.out.println("日: " +  c.get(Calendar.DAY_OF_MONTH));
System.out.println("時: " +  c.get(Calendar.HOUR));
System.out.println("分: " +  c.get(Calendar.MINUTE));
System.out.println("秒: " +  c.get(Calendar.SECOND));
```
```
java.util.GregorianCalendar[time=1745293376003,areFieldsSet=true,areAllFieldsSet=true,lenient=true,zone=sun.util.calendar.ZoneInfo[id="Asia/Hong_Kong",offset=28800000,dstSavings=0,useDaylight=false,transitions=71,lastRule=null],firstDayOfWeek=1,minimalDaysInFirstWeek=1,ERA=1,YEAR=2025,MONTH=3,WEEK_OF_YEAR=17,WEEK_OF_MONTH=4,DAY_OF_MONTH=22,DAY_OF_YEAR=112,DAY_OF_WEEK=3,DAY_OF_WEEK_IN_MONTH=4,AM_PM=0,HOUR=11,HOUR_OF_DAY=11,MINUTE=42,SECOND=56,MILLISECOND=3,ZONE_OFFSET=28800000,DST_OFFSET=0]
年: 2025
月: 4
日: 22
時: 11
分: 42
秒: 56
```

## 第三代日期時間
匯入套件
```java
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
```
`LocalDateTime` = `LocalDate` + `LocalTime`
### 取得目前日期時間
#### 預設時區
```java
LocalDateTime ldt = LocalDateTime.now();
System.out.println(ldt);
System.out.println("年: " + ldt.getYear());
System.out.println("月: " + ldt.getMonthValue());
System.out.println("日: " + ldt.getDayOfMonth());
System.out.println("時: " + ldt.getHour());
System.out.println("分: " + ldt.getMinute());
System.out.println("秒: " + ldt.getSecond());
```
```
2025-04-22T13:02:52.317499600
年: 2025
月: 4
日: 22
時: 13
分: 2
秒: 52
```

#### 指定時區
```java
LocalDateTime ldt = LocalDateTime.now(ZoneId.of("Asia/Hong_Kong"));
System.out.println(ldt.getHour());
```
查詢可用時區
```java
for (String zoneId : ZoneId.getAvailableZoneIds()) {
    System.out.println(zoneId);
}
```

### 格式化
```java
DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy年MM月dd日 HH:mm:ss E");
System.out.println(dtf.format(ldt));
```
```
2025年04月22日 11:27:24 Tue
```

### 將格式化的時間儲存為 TemporalAccessor 介面的實作物件
```java
LocalDateTime ldt = LocalDateTime.from(dtf.parse("2025年04月21日 10:07:43 Mon"));
System.out.println(ldt);
```

### 加減
```java
LocalDateTime ldt = LocalDateTime.now();
System.out.println(dtf.format(ldt));
LocalDateTime plusMinutes = ldt.plusMinutes(666);
LocalDateTime subtractMinutes = ldt.plusMinutes(-666);
System.out.println(dtf.format(plusMinutes));
System.out.println(dtf.format(subtractMinutes));
```
```
2025年04月24日 09:53:22 Thu
2025年04月24日 20:59:22 Thu
2025年04月23日 22:47:22 Wed
```

## 時間戳記物件
匯入套件
```java
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
```
### 取得時間戳記物件
```java
Instant instant = Instant.now();
System.out.println(instant);
```
```
2025-04-24T02:24:51.457088700Z
```
### 與第一代互動
#### 轉換成 Date 物件
```java
Date date = Date.from(instant);
```
#### 轉回 Instant 物件
```java
Instant instant = date.toInstant();
```
### 與第三代互動
#### 轉換成 LocalDateTime 物件
```java
LocalDateTime ldt = LocalDateTime.ofInstant(Instant.now(), ZoneId.systemDefault());
```
#### 轉換成 ZoneDateTime 物件
```java
ZonedDateTime zdt = ZonedDateTime.ofInstant(Instant.now(), ZoneId.systemDefault());
```
#### 轉回 Instant 物件
```java
ldt.atZone(ZoneId.systemDefault()).toInstant();
```

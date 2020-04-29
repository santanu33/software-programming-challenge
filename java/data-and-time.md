new Classes, ***Instant***  A point in time since January 1, 1970, expressed in nanoseconds
Instant class works well with Duration and Period. This is majorly for Machine purpose, what good a Epoch time is useful for human !


```java
Instant start =  Instant.now();
Thread.sleep(2000);
Instant end = Instant.now();
Duration duration = Duration.between(start, end); // create a duration between two temporal object
System.out.println(duration.getSeconds());
```

Duration class can be use to find duration between two temporal objects. like two LocalTime, Instants and LocalDateTime.
With Duration , let me introduce Period class which almost same like Duration but have more human readable representation.

**LocalDate**, **LocalTime**, **LocalDateTime**, and **Instant** have many methods in common, in Layman terms
```java
LocalDateTime = LocalDate + LocalTime
ZonedDateTime = LocalDate + LocalTime + ZoneId
```
you can perform most of the chained operations on the new Date API with

```java
    LocalDate date = LocalDate.of(2020, 4, 11);
    date = date.with(ChronoField.MONTH_OF_YEAR, 1);
    date = date.plusYears(1).plusDays(1);
    date.withYear(2021);
    System.out.println(date); // 2021-01-12
```
## parse date with java.time.format

```java
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/M/yyyy");
    LocalDate date1 = LocalDate.of(2020, 12, 1);
    String formattedDate = date1.format(formatter); // date to string
    System.out.println(formattedDate);
    LocalDate date2 = LocalDate.parse(formattedDate, formatter); // string to date
    System.out.println(date2);
```
##### table for all formatter

```java
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("<<formatter from table and description>>");
LocalDateTime dateTime = LocalDateTime.of(2020, 12, 1, 14,10,2, 55 );
```

| Formatter | Description |
| --- | --- |
| `dd/LLLL/yyyy` | 01/December/2020 |
| `dd/LLL/yyyy` | 01/Dec/2020 |
| `dd/LLL/yyyy H:m:s` | dd/LLL/yyyy H:m:s |

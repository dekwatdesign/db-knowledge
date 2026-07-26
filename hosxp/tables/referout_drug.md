# `referout_drug`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| refer_no | varchar(50) | YES |  | NULL |  |  |
| hn | varchar(50) | YES |  | NULL |  |  |
| subsuffix | varchar(50) | YES |  | NULL |  |  |
| makedate | datetime | YES |  | NULL |  |  |
| stockname | varchar(500) | YES |  | NULL |  |  |
| touse | varchar(500) | YES |  | NULL |  |  |
| toorder | varchar(500) | YES |  | NULL |  |  |
| memo1 | varchar(500) | YES |  | NULL |  |  |
| memo2 | varchar(500) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "refer_no": "11147-1-55999003",
    "hn": "0248015",
    "subsuffix": "1",
    "makedate": "2012-09-18 12:00:03",
    "stockname": "BUDESONIDE+FORMOTEROL DPI 120 doses (Symbicort)",
    "touse": "สูดเข้าลำคอ 1 ที วันละ 2 ครั้ง เช้า-เย็น",
    "toorder": "1 SET",
    "memo1": "อมบ้วนปากด้วยน้ำสะอาดหลังพ่นยา",
    "memo2": ""
  },
  {
    "refer_no": "11147-1-55999003",
    "hn": "0248015",
    "subsuffix": "2",
    "makedate": "2012-09-18 12:00:09",
    "stockname": "ACTIFED TAB",
    "touse": "กินครั้งละ 1 เม็ด วันละ 3 ครั้ง หลังอาหาร เช้า-กลางวัน-เย็น",
    "toorder": "30 เม็ด",
    "memo1": "ยานี้อาจทำให้ง่วงนอน",
    "memo2": "ยาแก้แพ้,ลดอาการคัดจมูก"
  }
]
```

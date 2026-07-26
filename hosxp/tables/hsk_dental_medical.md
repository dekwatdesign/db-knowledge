# `hsk_dental_medical`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(10) | NO | PRI | 0 |  |  |
| vn | varchar(30) | NO | PRI |  |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| hn | varchar(9) | NO | PRI |  |  |  |
| vstdate | date | YES |  | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| p1 | varchar(255) | YES |  | NULL |  |  |
| p2 | varchar(255) | YES |  | NULL |  |  |
| p3 | varchar(255) | YES |  | NULL |  |  |
| p4 | varchar(255) | YES |  | NULL |  |  |
| p5 | varchar(255) | YES |  | NULL |  |  |
| doctor | varchar(30) | YES |  | NULL |  |  |
| d_update | timestamp | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | hn | no | 1 |
| PRIMARY | id | yes | 1 |
| PRIMARY | vn | yes | 2 |
| PRIMARY | hn | yes | 3 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "id": 1,
    "vn": "670913070710",
    "an": "",
    "hn": "580000886",
    "vstdate": "2024-09-13",
    "vsttime": "11:17:30",
    "p1": "โรคประจำตัว",
    "p2": "การแพ้ยาหรือสารอื่นๆ",
    "p3": "ยาที่รับประทานปัจจุบัน",
    "p4": "การตั้งครรภ์\r\n(เฉพาะสตรี)",
    "p5": "ประวัติได้รับ\r\n(เคมีบำบัด/รังสีบำบัด)",
    "doctor": "306",
    "d_update": "2024-09-13 11:17:30"
  }
]
```

# `hsk_dental_medical_cc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(10) | NO | PRI | 0 |  |  |
| vn | varchar(30) | NO | PRI |  |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| hn | varchar(9) | NO | PRI |  |  |  |
| vstdate | date | YES |  | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| kg | decimal(4,1) | YES |  | NULL |  |  |
| cm | decimal(4,1) | YES |  | NULL |  |  |
| bp | varchar(10) | YES |  | NULL |  |  |
| hr | decimal(2,0) | YES |  | NULL |  |  |
| temp | decimal(3,1) | YES |  | NULL |  |  |
| c1 | varchar(1) | YES |  | NULL |  |  |
| c2 | varchar(1) | YES |  | NULL |  |  |
| c3 | varchar(1) | YES |  | NULL |  |  |
| c4 | varchar(1) | YES |  | NULL |  |  |
| c5 | varchar(1) | YES |  | NULL |  |  |
| c6 | varchar(1) | YES |  | NULL |  |  |
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
    "vsttime": "11:17:48",
    "kg": "70.0",
    "cm": "172.0",
    "bp": "122/70",
    "hr": "90",
    "temp": "36.0",
    "c1": "N",
    "c2": "N",
    "c3": "N",
    "c4": "N",
    "c5": "N",
    "c6": "N",
    "doctor": "306",
    "d_update": "2024-09-13 11:17:48"
  }
]
```

# `hsk_temperature`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(10) | NO | PRI | 0 |  |  |
| ward | varchar(20) | YES | MUL | NULL |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| temperature | double(4,2) | YES |  | NULL |  |  |
| pulse | int(4) | YES |  | NULL |  |  |
| rr | int(4) | YES |  | NULL |  |  |
| o2 | int(2) | YES |  | NULL |  |  |
| bps | int(4) | YES |  | NULL |  |  |
| bpd | int(4) | YES |  | NULL |  |  |
| weight | double(6,2) | YES |  | NULL |  |  |
| height | double(7,2) | YES |  | NULL |  |  |
| fluidintake | int(7) | YES |  | NULL |  |  |
| fluidoutput | int(7) | YES |  | NULL |  |  |
| stools | int(3) | YES |  | NULL |  |  |
| urine | int(3) | YES |  | NULL |  |  |
| sedative | char(1) | YES |  | NULL |  |  |
| time_stamp | int(2) | YES |  | NULL |  |  |
| staff | varchar(50) | YES | MUL | NULL |  |  |
| spell_id | int(1) | YES |  | NULL |  |  |
| d_update | timestamp | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| hn | hn | no | 1 |
| PRIMARY | id | yes | 1 |
| staff | staff | no | 1 |
| vstdate | vstdate | no | 1 |
| ward | ward | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 475320,
    "ward": "01",
    "vstdate": "2024-08-27",
    "vsttime": "11:46:11",
    "hn": "660001252",
    "an": "670001142",
    "temperature": 36.0,
    "pulse": 123,
    "rr": 90,
    "o2": 99,
    "bps": 111,
    "bpd": 88,
    "weight": 60.0,
    "height": 135.0,
    "fluidintake": 55,
    "fluidoutput": 77,
    "stools": 2,
    "urine": 3,
    "sedative": "2",
    "time_stamp": 10,
    "staff": "[MASKED_FULLNAME]",
    "spell_id": 1,
    "d_update": "2024-08-27 11:46:11"
  },
  {
    "id": 475321,
    "ward": "04",
    "vstdate": "2024-08-30",
    "vsttime": "14:54:54",
    "hn": "670001082",
    "an": "670001503",
    "temperature": 36.6,
    "pulse": 82,
    "rr": 20,
    "o2": 0,
    "bps": 100,
    "bpd": 78,
    "weight": 100.0,
    "height": 163.0,
    "fluidintake": 0,
    "fluidoutput": 0,
    "stools": 0,
    "urine": 2,
    "sedative": "0",
    "time_stamp": 14,
    "staff": "[MASKED_FULLNAME]",
    "spell_id": 2,
    "d_update": "2024-08-30 14:55:22"
  },
  {
    "id": 475322,
    "ward": "03",
    "vstdate": "2024-09-04",
    "vsttime": "10:26:23",
    "hn": "660001191",
    "an": "670001328",
    "temperature": 36.0,
    "pulse": 78,
    "rr": 0,
    "o2": 0,
    "bps": 0,
    "bpd": 0,
    "weight": 0.0,
    "height": 0.0,
    "fluidintake": 0,
    "fluidoutput": 0,
    "stools": 0,
    "urine": 0,
    "sedative": "0",
    "time_stamp": 18,
    "staff": "[MASKED_FULLNAME]",
    "spell_id": 1,
    "d_update": "2024-09-04 10:26:23"
  },
  {
    "id": 475323,
    "ward": "03",
    "vstdate": "2024-09-04",
    "vsttime": "13:56:00",
    "hn": "650005914",
    "an": "670001419",
    "temperature": 36.0,
    "pulse": 78,
    "rr": 98,
    "o2": 0,
    "bps": 0,
    "bpd": 0,
    "weight": 70.0,
    "height": 177.0,
    "fluidintake": 0,
    "fluidoutput": 0,
    "stools": 0,
    "urine": 0,
    "sedative": "0",
    "time_stamp": 14,
    "staff": "[MASKED_FULLNAME]",
    "spell_id": 1,
    "d_update": "2024-09-04 13:56:00"
  },
  {
    "id": 475324,
    "ward": "03",
    "vstdate": "2024-09-04",
    "vsttime": "13:56:05",
    "hn": "650005914",
    "an": "670001419",
    "temperature": 36.0,
    "pulse": 78,
    "rr": 98,
    "o2": 0,
    "bps": 0,
    "bpd": 0,
    "weight": 60.0,
    "height": 180.0,
    "fluidintake": 0,
    "fluidoutput": 0,
    "stools": 0,
    "urine": 0,
    "sedative": "0",
    "time_stamp": 14,
    "staff": "[MASKED_FULLNAME]",
    "spell_id": 1,
    "d_update": "2024-09-04 13:56:05"
  },
  {
    "id": 475325,
    "ward": "03",
    "vstdate": "2024-09-04",
    "vsttime": "13:56:16",
    "hn": "650005914",
    "an": "670001419",
    "temperature": 37.0,
    "pulse": 0,
    "rr": 0,
    "o2": 0,
    "bps": 0,
    "bpd": 0,
    "weight": 0.0,
    "height": 0.0,
    "fluidintake": 0,
    "fluidoutput": 0,
    "stools": 0,
    "urine": 0,
    "sedative": "0",
    "time_stamp": 2,
    "staff": "[MASKED_FULLNAME]",
    "spell_id": 1,
    "d_update": "2024-09-04 13:56:16"
  },
  {
    "id": 475326,
    "ward": "03",
    "vstdate": "2024-09-04",
    "vsttime": "13:56:29",
    "hn": "650005914",
    "an": "670001419",
    "temperature": 38.0,
    "pulse": 0,
    "rr": 0,
    "o2": 0,
    "bps": 0,
    "bpd": 0,
    "weight": 0.0,
    "height": 0.0,
    "fluidintake": 0,
    "fluidoutput": 0,
    "stools": 0,
    "urine": 0,
    "sedative": "0",
    "time_stamp": 14,
    "staff": "[MASKED_FULLNAME]",
    "spell_id": 1,
    "d_update": "2024-09-04 13:56:29"
  },
  {
    "id": 475327,
    "ward": "04",
    "vstdate": "2024-09-05",
    "vsttime": "8:09:03",
    "hn": "610000298",
    "an": "670001483",
    "temperature": 36.6,
    "pulse": 102,
    "rr": 20,
    "o2": 0,
    "bps": 110,
    "bpd": 70,
    "weight": 57.0,
    "height": 167.0,
    "fluidintake": 0,
    "fluidoutput": 0,
    "stools": 0,
    "urine": 2,
    "sedative": "1",
    "time_stamp": 6,
    "staff": "[MASKED_FULLNAME]",
    "spell_id": 1,
    "d_update": "2024-09-05 08:09:03"
  }
]
```

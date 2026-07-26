# `asset_propoties`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| PROPOTIES_ID | int | NO | PRI | NULL | auto_increment |  |
| TYPE_ID | varchar(20) | YES |  |  |  |  |
| PROPOTIES_NAME | varchar(100) | YES |  |  |  |  |
| PROPOTIES_CODE | varchar(4) | YES |  |  |  |  |
| UNIT_NAME | varchar(255) | YES |  |  |  |  |
| ACTIVE | enum('True','False') | YES |  | True |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | PROPOTIES_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "PROPOTIES_ID": 1,
    "TYPE_ID": "3182",
    "PROPOTIES_NAME": "จอ CRT",
    "PROPOTIES_CODE": "0001",
    "UNIT_NAME": "",
    "ACTIVE": "True"
  },
  {
    "PROPOTIES_ID": 2,
    "TYPE_ID": "3182",
    "PROPOTIES_NAME": "จอแบบ LCD",
    "PROPOTIES_CODE": "0002",
    "UNIT_NAME": "",
    "ACTIVE": "True"
  },
  {
    "PROPOTIES_ID": 3,
    "TYPE_ID": "3182",
    "PROPOTIES_NAME": "จอแบบ Wide Screen",
    "PROPOTIES_CODE": "0003",
    "UNIT_NAME": "",
    "ACTIVE": "True"
  },
  {
    "PROPOTIES_ID": 4,
    "TYPE_ID": "635",
    "PROPOTIES_NAME": "พัดลมตั้งพื้นขนาด 12 นิ้ว",
    "PROPOTIES_CODE": "0001",
    "UNIT_NAME": "",
    "ACTIVE": "True"
  },
  {
    "PROPOTIES_ID": 5,
    "TYPE_ID": "636",
    "PROPOTIES_NAME": "พัดลมตั้งพื้น ขนาด 12 นิ้ว",
    "PROPOTIES_CODE": "0001",
    "UNIT_NAME": "",
    "ACTIVE": "True"
  },
  {
    "PROPOTIES_ID": 6,
    "TYPE_ID": "636",
    "PROPOTIES_NAME": "พัดลมตั้งพื้น ขนาด 16 นิ้ว",
    "PROPOTIES_CODE": "0002",
    "UNIT_NAME": "",
    "ACTIVE": "True"
  },
  {
    "PROPOTIES_ID": 9,
    "TYPE_ID": "637",
    "PROPOTIES_NAME": "พัดลมตั้งโต๊ะ ขนาด 12 นิ้ว",
    "PROPOTIES_CODE": "0001",
    "UNIT_NAME": "",
    "ACTIVE": "True"
  },
  {
    "PROPOTIES_ID": 10,
    "TYPE_ID": "637",
    "PROPOTIES_NAME": "พัดลมตั้งโต๊ะ ขนาด 16 นิ้ว",
    "PROPOTIES_CODE": "0002",
    "UNIT_NAME": "",
    "ACTIVE": "True"
  }
]
```

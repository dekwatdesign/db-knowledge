# `asset_land`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| LAND_RAWANG | varchar(50) | YES |  |  |  |  |
| LAND_NUMBER | varchar(50) | YES |  |  |  |  |
| LAND_CHANOD | varchar(50) | YES |  |  |  |  |
| LAND_FONT_CHECK | varchar(50) | YES |  |  |  |  |
| LAND_ADD | varchar(50) | YES |  |  |  |  |
| TUMBON_ID | varchar(10) | YES |  |  |  |  |
| AMPHUR_ID | varchar(10) | YES |  |  |  |  |
| PROVINCE_ID | varchar(10) | YES |  |  |  |  |
| LAND_SIZE | int | YES |  | NULL |  |  |
| LAND_SIZE_NGAN | decimal(10,2) | YES |  | NULL |  |  |
| LAND_SIZE_TARANGWA | decimal(10,2) | YES |  | NULL |  |  |
| LAND_OFFICE | varchar(100) | YES |  |  |  |  |
| LAND_OFFICE_PHONE | varchar(50) | YES |  |  |  |  |
| LAND_LAT | varchar(30) | YES |  |  |  |  |
| LAND_LNG | varchar(30) | YES |  |  |  |  |
| TUMBON_NAME | varchar(30) | YES |  |  |  |  |
| AMPHUR_NAME | varchar(30) | YES |  |  |  |  |
| PROVINCE_NAME | varchar(30) | YES |  |  |  |  |
| ZIPCODE | varchar(5) | YES |  |  |  |  |
| SUP_ID | varchar(11) | YES |  |  |  | รหัสทะเบียนพัสดุ อ้างถึง |
| SUP_FSN | varchar(20) | YES |  |  |  | เลข FSN |
| FILE | mediumblob | YES |  | NULL |  |  |
| FILE_SIZE | double | YES |  | NULL |  |  |
| FILE_TYPE | varchar(10) | YES |  |  |  |  |
| FILE_SIZE_MB | double | YES |  | NULL |  |  |
| LAND_OWNER | varchar(100) | YES |  |  |  |  |
| LAND_OWNER_DATE | date | YES |  | NULL |  |  |
| FILE_NAME | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "ID": 1,
    "LAND_RAWANG": "111",
    "LAND_NUMBER": "212",
    "LAND_CHANOD": "1245",
    "LAND_FONT_CHECK": "1212",
    "LAND_ADD": "12",
    "TUMBON_ID": "110101",
    "AMPHUR_ID": "1101",
    "PROVINCE_ID": "11",
    "LAND_SIZE": 9,
    "LAND_SIZE_NGAN": "1.00",
    "LAND_SIZE_TARANGWA": "1.00",
    "LAND_OFFICE": "จังหวัดสมุทรปราการ",
    "LAND_OFFICE_PHONE": "098565656565",
    "LAND_LAT": "121212121",
    "LAND_LNG": "2323232",
    "TUMBON_NAME": "",
    "AMPHUR_NAME": "",
    "PROVINCE_NAME": "",
    "ZIPCODE": "12100",
    "SUP_ID": "",
    "SUP_FSN": "",
    "FILE": null,
    "FILE_SIZE": null,
    "FILE_TYPE": "",
    "FILE_SIZE_MB": null,
    "LAND_OWNER": "ะ",
    "LAND_OWNER_DATE": null,
    "FILE_NAME": null,
    "updated_at": "2022-01-13 22:01:16",
    "created_at": "2021-11-24 14:01:40"
  }
]
```

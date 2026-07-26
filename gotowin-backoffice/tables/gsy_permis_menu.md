# `gsy_permis_menu`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| PERMIS_MENU_ID | varchar(20) | NO | PRI | NULL |  |  |
| PERMIS_MENU_NAME | varchar(100) | YES |  |  |  |  |
| ACTIVE | enum('True','False') | YES |  | True |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | PERMIS_MENU_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "PERMIS_MENU_ID": "1",
    "PERMIS_MENU_NAME": "ลงเวลาปฏิบัติงาน",
    "ACTIVE": "True",
    "updated_at": "2021-11-24 06:21:11",
    "created_at": "2021-11-24 06:21:11"
  },
  {
    "PERMIS_MENU_ID": "10",
    "PERMIS_MENU_NAME": "งานบริการยานพาหนะ",
    "ACTIVE": "True",
    "updated_at": "2022-04-28 08:58:10",
    "created_at": "2021-11-24 06:21:11"
  },
  {
    "PERMIS_MENU_ID": "11",
    "PERMIS_MENU_NAME": "งานบริหารทรัพย์สิน",
    "ACTIVE": "True",
    "updated_at": "2021-11-24 06:21:11",
    "created_at": "2021-11-24 06:21:11"
  },
  {
    "PERMIS_MENU_ID": "12",
    "PERMIS_MENU_NAME": "งานพัสดุ",
    "ACTIVE": "True",
    "updated_at": "2021-11-24 06:21:11",
    "created_at": "2021-11-24 06:21:11"
  },
  {
    "PERMIS_MENU_ID": "13",
    "PERMIS_MENU_NAME": "คลังพัสดุ",
    "ACTIVE": "True",
    "updated_at": "2026-07-18 10:07:44",
    "created_at": "2021-11-24 06:21:11"
  },
  {
    "PERMIS_MENU_ID": "14",
    "PERMIS_MENU_NAME": "งานแจ้งซ่อมบำรุง",
    "ACTIVE": "True",
    "updated_at": "2022-04-28 10:31:31",
    "created_at": "2021-11-24 06:21:11"
  },
  {
    "PERMIS_MENU_ID": "15",
    "PERMIS_MENU_NAME": "ตารางเวรปฏิบัติงาน",
    "ACTIVE": "True",
    "updated_at": "2022-01-20 09:51:40",
    "created_at": "2021-11-24 06:21:11"
  },
  {
    "PERMIS_MENU_ID": "16",
    "PERMIS_MENU_NAME": "งานซักฟอก",
    "ACTIVE": "True",
    "updated_at": "2026-07-18 10:07:43",
    "created_at": "2021-11-24 06:21:11"
  }
]
```

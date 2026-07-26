# `asset_request_sub`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ASSET_REQUEST_SUB_ID | int | NO | PRI | NULL | auto_increment |  |
| ASSET_REQUEST_ID | int | YES |  | NULL |  |  |
| ASSET_REQUEST_SUB_NUMBER | varchar(255) | YES |  | NULL |  |  |
| ASSET_REQUEST_SUB_DETAIL | varchar(255) | YES |  | NULL |  |  |
| ASSET_REQUEST_SUB_UNIT | varchar(11) | YES |  | NULL |  |  |
| ASSET_REQUEST_SUB_PRICE | int | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| ASSET_REQUEST_SUB_ARTICLE_ID | int | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ASSET_REQUEST_SUB_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ASSET_REQUEST_SUB_ID": 1,
    "ASSET_REQUEST_ID": 1,
    "ASSET_REQUEST_SUB_NUMBER": "4120-001-0002/0001",
    "ASSET_REQUEST_SUB_DETAIL": "รถยนต์เก๋งส่วนบุคคล",
    "ASSET_REQUEST_SUB_UNIT": "26",
    "ASSET_REQUEST_SUB_PRICE": 500000,
    "updated_at": "2022-01-18 13:59:21",
    "created_at": "2022-01-18 13:59:21",
    "ASSET_REQUEST_SUB_ARTICLE_ID": 56
  },
  {
    "ASSET_REQUEST_SUB_ID": 3,
    "ASSET_REQUEST_ID": 2,
    "ASSET_REQUEST_SUB_NUMBER": "4120-001-0002/0002",
    "ASSET_REQUEST_SUB_DETAIL": "รถยนต์ตู้ 10 ที่นั่ง",
    "ASSET_REQUEST_SUB_UNIT": "26",
    "ASSET_REQUEST_SUB_PRICE": 300000,
    "updated_at": "2022-01-20 21:26:10",
    "created_at": "2022-01-20 21:26:10",
    "ASSET_REQUEST_SUB_ARTICLE_ID": 57
  },
  {
    "ASSET_REQUEST_SUB_ID": 6,
    "ASSET_REQUEST_ID": 3,
    "ASSET_REQUEST_SUB_NUMBER": "S-080201-0832-66-2-00048",
    "ASSET_REQUEST_SUB_DETAIL": "เครื่องคอมพิวเตอร์ สำหรับงานสำนักงาน",
    "ASSET_REQUEST_SUB_UNIT": "12",
    "ASSET_REQUEST_SUB_PRICE": 0,
    "updated_at": "2023-10-18 14:12:44",
    "created_at": "2023-10-18 14:12:44",
    "ASSET_REQUEST_SUB_ARTICLE_ID": 2490
  },
  {
    "ASSET_REQUEST_SUB_ID": 7,
    "ASSET_REQUEST_ID": 3,
    "ASSET_REQUEST_SUB_NUMBER": "S-080201-0832-66-2-00049",
    "ASSET_REQUEST_SUB_DETAIL": "เครื่องคอมพิวเตอร์ สำหรับงานสำนักงาน",
    "ASSET_REQUEST_SUB_UNIT": "12",
    "ASSET_REQUEST_SUB_PRICE": 0,
    "updated_at": "2023-10-18 14:12:44",
    "created_at": "2023-10-18 14:12:44",
    "ASSET_REQUEST_SUB_ARTICLE_ID": 2491
  },
  {
    "ASSET_REQUEST_SUB_ID": 8,
    "ASSET_REQUEST_ID": 4,
    "ASSET_REQUEST_SUB_NUMBER": "S-080605-0832-66-2-00001",
    "ASSET_REQUEST_SUB_DETAIL": "เครื่องสำรองไฟฟ้า UPS ขนาด 10KVA",
    "ASSET_REQUEST_SUB_UNIT": "12",
    "ASSET_REQUEST_SUB_PRICE": 268400,
    "updated_at": "2023-10-25 09:06:05",
    "created_at": "2023-10-25 09:06:05",
    "ASSET_REQUEST_SUB_ARTICLE_ID": 2532
  },
  {
    "ASSET_REQUEST_SUB_ID": 9,
    "ASSET_REQUEST_ID": 5,
    "ASSET_REQUEST_SUB_NUMBER": "S-080702-0832-66-2-00002",
    "ASSET_REQUEST_SUB_DETAIL": "สแกนเนอร์ สำหรับงานเก็บเอกสารระดับศูนย์บริการ แบบที่ 1",
    "ASSET_REQUEST_SUB_UNIT": "12",
    "ASSET_REQUEST_SUB_PRICE": 15100,
    "updated_at": "2023-11-02 15:34:44",
    "created_at": "2023-11-02 15:34:44",
    "ASSET_REQUEST_SUB_ARTICLE_ID": 2501
  },
  {
    "ASSET_REQUEST_SUB_ID": 10,
    "ASSET_REQUEST_ID": 6,
    "ASSET_REQUEST_SUB_NUMBER": "S-08000703-0832-67-2-00001",
    "ASSET_REQUEST_SUB_DETAIL": "แสกนเนอร์ สำหรับงานเก็บเอกสารระดับศูยน์บริการ แบบที่ 2",
    "ASSET_REQUEST_SUB_UNIT": "12",
    "ASSET_REQUEST_SUB_PRICE": 27000,
    "updated_at": "2023-11-21 17:30:39",
    "created_at": "2023-11-21 17:30:39",
    "ASSET_REQUEST_SUB_ARTICLE_ID": 2542
  },
  {
    "ASSET_REQUEST_SUB_ID": 11,
    "ASSET_REQUEST_ID": 7,
    "ASSET_REQUEST_SUB_NUMBER": "B-080601-0832-66-2-00006",
    "ASSET_REQUEST_SUB_DETAIL": "เครื่องสำรองไฟขนาด 1000 VA",
    "ASSET_REQUEST_SUB_UNIT": "12",
    "ASSET_REQUEST_SUB_PRICE": 2500,
    "updated_at": "2023-12-18 14:41:14",
    "created_at": "2023-12-18 14:41:14",
    "ASSET_REQUEST_SUB_ARTICLE_ID": 2506
  }
]
```

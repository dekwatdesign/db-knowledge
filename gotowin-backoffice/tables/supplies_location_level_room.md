# `supplies_location_level_room`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| LEVEL_ROOM_ID | int | NO | PRI | NULL | auto_increment |  |
| LEVEL_ROOM_NAME | varchar(255) | YES |  |  |  |  |
| LOCATION_LEVEL_ID | varchar(11) | YES |  |  |  | อ้างถึงว่าอยู่ชั้นไหน |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | LEVEL_ROOM_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "LEVEL_ROOM_ID": 1,
    "LEVEL_ROOM_NAME": "พื้นที่นั่งรอหน้าลิฟฟ์",
    "LOCATION_LEVEL_ID": "1",
    "updated_at": "2022-10-19 09:26:52",
    "created_at": "2021-11-24 14:08:00"
  },
  {
    "LEVEL_ROOM_ID": 2,
    "LEVEL_ROOM_NAME": "ห้องเวชระเบียนและตรวจสอบสิทธิ์",
    "LOCATION_LEVEL_ID": "2",
    "updated_at": "2022-06-23 09:25:13",
    "created_at": "2022-06-23 09:24:48"
  },
  {
    "LEVEL_ROOM_ID": 3,
    "LEVEL_ROOM_NAME": "ห้องเก็บเงิน",
    "LOCATION_LEVEL_ID": "2",
    "updated_at": "2022-06-23 09:25:01",
    "created_at": "2022-06-23 09:25:01"
  },
  {
    "LEVEL_ROOM_ID": 4,
    "LEVEL_ROOM_NAME": "ห้องจ่ายผู้ป่วย",
    "LOCATION_LEVEL_ID": "2",
    "updated_at": "2022-06-23 09:25:41",
    "created_at": "2022-06-23 09:25:41"
  },
  {
    "LEVEL_ROOM_ID": 5,
    "LEVEL_ROOM_NAME": "ห้องให้คำปรึกษาทางยา",
    "LOCATION_LEVEL_ID": "2",
    "updated_at": "2022-06-23 09:26:14",
    "created_at": "2022-06-23 09:26:14"
  },
  {
    "LEVEL_ROOM_ID": 6,
    "LEVEL_ROOM_NAME": "หัองหัวหน้าเภสัชกรรม",
    "LOCATION_LEVEL_ID": "2",
    "updated_at": "2022-06-23 09:28:43",
    "created_at": "2022-06-23 09:26:30"
  },
  {
    "LEVEL_ROOM_ID": 7,
    "LEVEL_ROOM_NAME": "ห้องคลังยา",
    "LOCATION_LEVEL_ID": "2",
    "updated_at": "2022-06-23 09:26:39",
    "created_at": "2022-06-23 09:26:39"
  },
  {
    "LEVEL_ROOM_ID": 8,
    "LEVEL_ROOM_NAME": "ห้องหัวหน้ากลุ่มงานเทคนิคการแพทย์",
    "LOCATION_LEVEL_ID": "2",
    "updated_at": "2022-06-23 09:29:20",
    "created_at": "2022-06-23 09:29:20"
  }
]
```

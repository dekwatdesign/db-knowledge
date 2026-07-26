# `hrd_kind_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HR_KIND_TYPE_ID | int | NO | PRI | NULL | auto_increment |  |
| HR_KIND_ID | varchar(10) | YES |  |  |  |  |
| HR_KIND_TYPE_NAME | varchar(50) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | HR_KIND_TYPE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "HR_KIND_TYPE_ID": 1,
    "HR_KIND_ID": "1",
    "HR_KIND_TYPE_NAME": "ข้าราชการพลเรือนสามัญ",
    "updated_at": null,
    "created_at": null
  },
  {
    "HR_KIND_TYPE_ID": 21,
    "HR_KIND_ID": "4",
    "HR_KIND_TYPE_NAME": "พนักงานราชการ",
    "updated_at": "2019-10-14 10:31:15",
    "created_at": "2019-10-14 10:31:15"
  },
  {
    "HR_KIND_TYPE_ID": 25,
    "HR_KIND_ID": "4",
    "HR_KIND_TYPE_NAME": "พนักงานกระทรวงสาธารณสุข",
    "updated_at": "2019-10-14 10:32:34",
    "created_at": "2019-10-14 10:32:34"
  },
  {
    "HR_KIND_TYPE_ID": 26,
    "HR_KIND_ID": "4",
    "HR_KIND_TYPE_NAME": "ลูกจ้างประจำ",
    "updated_at": "2019-10-14 10:32:58",
    "created_at": "2019-10-14 10:32:58"
  },
  {
    "HR_KIND_TYPE_ID": 27,
    "HR_KIND_ID": "5",
    "HR_KIND_TYPE_NAME": "ข้าราชการพลเรือนวิสามัญ",
    "updated_at": "2019-10-14 10:33:14",
    "created_at": "2019-10-14 10:33:14"
  },
  {
    "HR_KIND_TYPE_ID": 31,
    "HR_KIND_ID": "4",
    "HR_KIND_TYPE_NAME": "ลูกจ้างชั่วคราว",
    "updated_at": "2020-09-18 09:18:57",
    "created_at": "2020-09-18 09:18:57"
  },
  {
    "HR_KIND_TYPE_ID": 32,
    "HR_KIND_ID": "4",
    "HR_KIND_TYPE_NAME": "ลูกจ้างรายคาบ",
    "updated_at": "2020-09-18 09:19:16",
    "created_at": "2020-09-18 09:19:16"
  }
]
```

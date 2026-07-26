# `hrd_kind`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HR_KIND_ID | int | NO | PRI | NULL | auto_increment |  |
| HR_KIND_NAME | varchar(50) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | HR_KIND_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "HR_KIND_ID": 1,
    "HR_KIND_NAME": "ข้าราชการพลเรือน",
    "updated_at": "2019-10-14 10:22:43",
    "created_at": null
  },
  {
    "HR_KIND_ID": 4,
    "HR_KIND_NAME": "พนักงานอื่นของรัฐ",
    "updated_at": "2019-10-14 10:23:33",
    "created_at": "2019-10-14 10:23:33"
  },
  {
    "HR_KIND_ID": 5,
    "HR_KIND_NAME": "ข้าราชการในอดีต",
    "updated_at": "2019-10-14 10:23:58",
    "created_at": "2019-10-14 10:23:58"
  }
]
```

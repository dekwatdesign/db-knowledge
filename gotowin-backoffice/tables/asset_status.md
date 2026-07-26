# `asset_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| STATUS_ID | int | NO | PRI | NULL | auto_increment |  |
| STATUS_NAME | varchar(100) | YES |  |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | STATUS_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "STATUS_ID": 1,
    "STATUS_NAME": "ปกติ"
  },
  {
    "STATUS_ID": 2,
    "STATUS_NAME": "จำหน่ายแล้ว"
  },
  {
    "STATUS_ID": 3,
    "STATUS_NAME": "รอจำหน่าย"
  },
  {
    "STATUS_ID": 4,
    "STATUS_NAME": "ถูกยืม"
  },
  {
    "STATUS_ID": 5,
    "STATUS_NAME": "เสีย"
  },
  {
    "STATUS_ID": 6,
    "STATUS_NAME": "ส่งซ่อมภายนอก"
  },
  {
    "STATUS_ID": 7,
    "STATUS_NAME": "ส่งซ่อมภายใน"
  }
]
```

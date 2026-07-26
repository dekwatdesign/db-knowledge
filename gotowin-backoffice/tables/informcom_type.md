# `informcom_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| COM_TYPE_ID | int | NO | PRI | NULL | auto_increment |  |
| COM_TYPE_NAME | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | COM_TYPE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "COM_TYPE_ID": 14,
    "COM_TYPE_NAME": "คอมพิวเตอร์แท็บเล็ต (Tablet)",
    "updated_at": "2020-09-23 14:21:43",
    "created_at": null
  },
  {
    "COM_TYPE_ID": 1,
    "COM_TYPE_NAME": "คอมพิวเตอร์ PC",
    "updated_at": "2020-09-23 14:12:55",
    "created_at": null
  },
  {
    "COM_TYPE_ID": 2,
    "COM_TYPE_NAME": "คอมพิวเตอร์แม่ข่าย (Server)",
    "updated_at": "2020-09-23 14:13:10",
    "created_at": null
  },
  {
    "COM_TYPE_ID": 3,
    "COM_TYPE_NAME": "คอมพิวเตอร์ Notebook",
    "updated_at": null,
    "created_at": null
  },
  {
    "COM_TYPE_ID": 4,
    "COM_TYPE_NAME": "คอมพิวเตอร์ All-in-one",
    "updated_at": null,
    "created_at": null
  },
  {
    "COM_TYPE_ID": 5,
    "COM_TYPE_NAME": "จอมอนิเตอร์ (Monitor)",
    "updated_at": "2020-09-23 14:13:56",
    "created_at": null
  },
  {
    "COM_TYPE_ID": 6,
    "COM_TYPE_NAME": "สแกนเนอร์ (Scanner)",
    "updated_at": "2020-09-23 14:14:24",
    "created_at": null
  },
  {
    "COM_TYPE_ID": 7,
    "COM_TYPE_NAME": "เครื่องอ่านบัตร Smart Card",
    "updated_at": null,
    "created_at": null
  }
]
```

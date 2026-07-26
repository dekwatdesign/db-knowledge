# `meetingroom_article`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ARTICLE_ID | int | NO | PRI | NULL | auto_increment |  |
| ARTICLE_NAME | varchar(100) | YES |  |  |  |  |
| ARTICLE_REF_ID | varchar(20) | YES |  |  |  |  |
| IMG | longblob | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ARTICLE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ARTICLE_ID": 1,
    "ARTICLE_NAME": "คอมพิวเตอร์ PC",
    "ARTICLE_REF_ID": null,
    "IMG": null,
    "updated_at": null,
    "created_at": null
  },
  {
    "ARTICLE_ID": 2,
    "ARTICLE_NAME": "คอมพิวเตอร์ Notebook",
    "ARTICLE_REF_ID": null,
    "IMG": null,
    "updated_at": null,
    "created_at": null
  },
  {
    "ARTICLE_ID": 3,
    "ARTICLE_NAME": "โปรเจคเตอร์",
    "ARTICLE_REF_ID": null,
    "IMG": null,
    "updated_at": null,
    "created_at": null
  },
  {
    "ARTICLE_ID": 4,
    "ARTICLE_NAME": "ไมโครโฟนตั้งโต๊ะ",
    "ARTICLE_REF_ID": null,
    "IMG": null,
    "updated_at": null,
    "created_at": null
  },
  {
    "ARTICLE_ID": 5,
    "ARTICLE_NAME": "ไมโครโฟน",
    "ARTICLE_REF_ID": null,
    "IMG": null,
    "updated_at": null,
    "created_at": null
  },
  {
    "ARTICLE_ID": 6,
    "ARTICLE_NAME": "ไมค์ลอย",
    "ARTICLE_REF_ID": null,
    "IMG": null,
    "updated_at": null,
    "created_at": null
  },
  {
    "ARTICLE_ID": 7,
    "ARTICLE_NAME": "Laser pointer",
    "ARTICLE_REF_ID": null,
    "IMG": null,
    "updated_at": "2020-08-04 08:31:13",
    "created_at": null
  },
  {
    "ARTICLE_ID": 8,
    "ARTICLE_NAME": "บันทึกภาพนิ่ง",
    "ARTICLE_REF_ID": null,
    "IMG": null,
    "updated_at": null,
    "created_at": null
  }
]
```

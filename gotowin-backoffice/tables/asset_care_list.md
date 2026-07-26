# `asset_care_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| CARE_LIST_ID | int | NO | PRI | NULL | auto_increment |  |
| CARE_LIST_NAME | varchar(150) | YES |  |  |  |  |
| ARTICLE_ID | varchar(10) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | CARE_LIST_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "CARE_LIST_ID": 1,
    "CARE_LIST_NAME": "ตรวจเช็คระยะ 10,000 กม.",
    "ARTICLE_ID": "5",
    "updated_at": null,
    "created_at": null
  },
  {
    "CARE_LIST_ID": 2,
    "CARE_LIST_NAME": "ทำความสะอาดเครื่อง",
    "ARTICLE_ID": "94",
    "updated_at": null,
    "created_at": null
  },
  {
    "CARE_LIST_ID": 3,
    "CARE_LIST_NAME": "ทำความสะอาดตัวกรอง",
    "ARTICLE_ID": "94",
    "updated_at": null,
    "created_at": null
  },
  {
    "CARE_LIST_ID": 4,
    "CARE_LIST_NAME": "ทำความสะอาดตัวกรองชั้นสอง",
    "ARTICLE_ID": "94",
    "updated_at": null,
    "created_at": null
  },
  {
    "CARE_LIST_ID": 5,
    "CARE_LIST_NAME": "การทำความสะอาดตัวทำความชื้น",
    "ARTICLE_ID": "94",
    "updated_at": null,
    "created_at": null
  },
  {
    "CARE_LIST_ID": 6,
    "CARE_LIST_NAME": "การเปลี่ยนท่อฟิวส์",
    "ARTICLE_ID": "94",
    "updated_at": null,
    "created_at": null
  },
  {
    "CARE_LIST_ID": 7,
    "CARE_LIST_NAME": "ทำความสะอาดเครื่อง",
    "ARTICLE_ID": "95",
    "updated_at": null,
    "created_at": null
  },
  {
    "CARE_LIST_ID": 8,
    "CARE_LIST_NAME": "ทำความสะอาดตัวกรอง",
    "ARTICLE_ID": "95",
    "updated_at": null,
    "created_at": null
  }
]
```

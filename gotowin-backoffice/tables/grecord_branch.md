# `grecord_branch`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| RECORD_BRANCH_ID | int | NO | PRI | NULL | auto_increment |  |
| RECORD_BRANCH_NAME | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | RECORD_BRANCH_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "RECORD_BRANCH_ID": 1,
    "RECORD_BRANCH_NAME": "สาขาโรคหัวใจ",
    "updated_at": null,
    "created_at": null
  },
  {
    "RECORD_BRANCH_ID": 2,
    "RECORD_BRANCH_NAME": "สาขาโรคมะเร็ง",
    "updated_at": null,
    "created_at": null
  },
  {
    "RECORD_BRANCH_ID": 3,
    "RECORD_BRANCH_NAME": "สาขาทารกแรกเกิด",
    "updated_at": null,
    "created_at": null
  },
  {
    "RECORD_BRANCH_ID": 4,
    "RECORD_BRANCH_NAME": "สาขาอุบัติเหตุ",
    "updated_at": null,
    "created_at": null
  },
  {
    "RECORD_BRANCH_ID": 5,
    "RECORD_BRANCH_NAME": "สาขาโรคหลอดเลือดสมอง",
    "updated_at": null,
    "created_at": null
  },
  {
    "RECORD_BRANCH_ID": 6,
    "RECORD_BRANCH_NAME": "สาขาจิตเวช",
    "updated_at": null,
    "created_at": null
  },
  {
    "RECORD_BRANCH_ID": 7,
    "RECORD_BRANCH_NAME": "สาขาไต",
    "updated_at": null,
    "created_at": null
  },
  {
    "RECORD_BRANCH_ID": 8,
    "RECORD_BRANCH_NAME": "สาขาตา",
    "updated_at": null,
    "created_at": null
  }
]
```

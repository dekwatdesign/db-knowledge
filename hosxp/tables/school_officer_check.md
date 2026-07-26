# `school_officer_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| school_officer_check_id | int(11) | NO | PRI | 0 |  |  |
| school_officer_check_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_school_officer_check_name | school_officer_check_name | yes | 1 |
| PRIMARY | school_officer_check_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "school_officer_check_id": 1,
    "school_officer_check_name": "ได้ตรวจ",
    "hos_guid": null
  },
  {
    "school_officer_check_id": 2,
    "school_officer_check_name": "พบโรค",
    "hos_guid": null
  },
  {
    "school_officer_check_id": 3,
    "school_officer_check_name": "รักษา",
    "hos_guid": null
  }
]
```

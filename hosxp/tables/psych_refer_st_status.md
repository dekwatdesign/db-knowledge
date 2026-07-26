# `psych_refer_st_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_refer_st_status_id | int(11) | NO | PRI | 0 |  |  |
| psych_refer_st_status_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | psych_refer_st_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "psych_refer_st_status_id": 1,
    "psych_refer_st_status_name": "รอบันทึกการรักษา",
    "active": null
  },
  {
    "psych_refer_st_status_id": 2,
    "psych_refer_st_status_name": "บันทึกการรักษาเสร็จสิ้น",
    "active": null
  }
]
```

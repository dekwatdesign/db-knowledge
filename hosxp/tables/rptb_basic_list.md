# `rptb_basic_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| rptb_basic_name | text | YES |  | NULL |  |  |
| rptb_basic_descr | text | YES |  | NULL |  |  |
| rptb_basic_editor | text | YES |  | NULL |  |  |
| rptb_basic_update | date | YES |  | NULL |  |  |
| rptb_basic_sql | text | YES |  | NULL |  |  |
| rptb_basic_fr3 | mediumblob | YES |  | NULL |  |  |
| rptb_basic_fr3_filename | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "id": 1,
    "rptb_basic_name": "ผู้ป่วยใหม่",
    "rptb_basic_descr": "ลงทะเบียนครั้งแรกตามช่วงเวลา",
    "rptb_basic_editor": "[MASKED_FULLNAME]",
    "rptb_basic_update": "2018-10-09",
    "rptb_basic_sql": "SELECT hn, cid, CONCAT(pname,fname,\" \",lname) as pt_name, firstday FROM patient WHERE firstday BETWEEN \"2017-10-01\" AND \"2018-09-30\"",
    "rptb_basic_fr3": null,
    "rptb_basic_fr3_filename": null
  }
]
```

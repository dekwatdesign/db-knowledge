# `ipt_pregnancy_anc_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_pregnancy_anc_type_id | int(11) | NO | PRI | 0 |  |  |
| ipt_pregnancy_anc_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipt_pregnancy_anc_type_name | ipt_pregnancy_anc_type_name | yes | 1 |
| PRIMARY | ipt_pregnancy_anc_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "ipt_pregnancy_anc_type_id": 1,
    "ipt_pregnancy_anc_type_name": "ฝากครรภ์ที่ รพ."
  },
  {
    "ipt_pregnancy_anc_type_id": 2,
    "ipt_pregnancy_anc_type_name": "ฝากครรภ์ที่ รพ.สต."
  },
  {
    "ipt_pregnancy_anc_type_id": 3,
    "ipt_pregnancy_anc_type_name": "ฝากครรภ์ที่อื่น"
  }
]
```

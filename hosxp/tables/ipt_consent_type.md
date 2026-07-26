# `ipt_consent_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_consent_type_id | int(11) | NO | PRI | 0 |  |  |
| ipt_consent_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipt_consent_type_name | ipt_consent_type_name | yes | 1 |
| PRIMARY | ipt_consent_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "ipt_consent_type_id": 1,
    "ipt_consent_type_name": "พิมพ์ชื่อติด Board ประชาสัมพันธ์"
  }
]
```

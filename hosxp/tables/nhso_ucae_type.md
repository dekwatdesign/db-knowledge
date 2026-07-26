# `nhso_ucae_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nhso_ucae_type_code | char(1) | NO | PRI |  |  |  |
| nhso_ucae_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_nhso_ucae_type_name | nhso_ucae_type_name | yes | 1 |
| PRIMARY | nhso_ucae_type_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "nhso_ucae_type_code": "A",
    "nhso_ucae_type_name": "Accident"
  },
  {
    "nhso_ucae_type_code": "E",
    "nhso_ucae_type_name": "Emergency"
  },
  {
    "nhso_ucae_type_code": "N",
    "nhso_ucae_type_name": "Normal"
  },
  {
    "nhso_ucae_type_code": "I",
    "nhso_ucae_type_name": "OP Refer ในจังหวัด"
  },
  {
    "nhso_ucae_type_code": "C",
    "nhso_ucae_type_name": "ย้ายหน่วยบริการเกิดสิทธิทันที"
  },
  {
    "nhso_ucae_type_code": "Z",
    "nhso_ucae_type_name": "บริการเชิงรุก"
  },
  {
    "nhso_ucae_type_code": "O",
    "nhso_ucae_type_name": "OP Refer ข้ามจังหวัด"
  },
  {
    "nhso_ucae_type_code": "-",
    "nhso_ucae_type_name": "ไม่เป็น A/E"
  }
]
```

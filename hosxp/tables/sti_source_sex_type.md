# `sti_source_sex_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sti_source_sex_type_id | int(11) | NO | PRI | 0 |  |  |
| sti_source_sex_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_sti_source_sex_name | sti_source_sex_name | yes | 1 |
| PRIMARY | sti_source_sex_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "sti_source_sex_type_id": 1,
    "sti_source_sex_name": "ชาย",
    "hos_guid": null
  },
  {
    "sti_source_sex_type_id": 2,
    "sti_source_sex_name": "หญิง",
    "hos_guid": null
  },
  {
    "sti_source_sex_type_id": 3,
    "sti_source_sex_name": "ไม่สามารถระบุได้",
    "hos_guid": null
  }
]
```

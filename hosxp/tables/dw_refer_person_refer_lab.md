# `dw_refer_person_refer_lab`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_refer_lab_id | int(11) | NO | PRI | 0 |  |  |
| person_refer_id | int(11) | YES | MUL | NULL |  |  |
| person_refer_lab_name | varchar(250) | YES |  | NULL |  |  |
| person_refer_lab_result | varchar(250) | YES |  | NULL |  |  |
| person_refer_lab_normal_value | varchar(250) | YES |  | NULL |  |  |
| person_refer_lab_unit | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_refer_id | person_refer_id | no | 1 |
| PRIMARY | person_refer_lab_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

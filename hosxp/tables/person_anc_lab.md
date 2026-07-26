# `person_anc_lab`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_anc_lab_id | int(11) | NO | PRI | 0 |  |  |
| person_anc_service_id | int(11) | YES |  | NULL |  |  |
| anc_lab_id | int(11) | YES |  | NULL |  |  |
| anc_lab_result | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| lab_result_normal | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | person_anc_lab_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

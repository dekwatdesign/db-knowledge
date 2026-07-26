# `person_deformed_assesment_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_deformed_assesment_list_id | int(11) | NO | PRI | 0 |  |  |
| person_deformed_detail_id | int(11) | YES | MUL | NULL |  |  |
| person_deformed_assesment_type_id | int(11) | YES | MUL | NULL |  |  |
| person_deformed_assesment_level | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_person_deformed_detail_id | person_deformed_detail_id | no | 1 |
| ix_unique | person_deformed_detail_id | yes | 1 |
| ix_unique | person_deformed_assesment_type_id | yes | 2 |
| ix_unique_index | person_deformed_assesment_type_id | yes | 1 |
| ix_unique_index | person_deformed_detail_id | yes | 2 |
| PRIMARY | person_deformed_assesment_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

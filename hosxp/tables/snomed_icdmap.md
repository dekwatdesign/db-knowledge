# `snomed_icdmap`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| map_id | varchar(40) | NO | PRI |  |  |  |
| concept_id | varchar(25) | YES | MUL | NULL |  |  |
| icd10 | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_concept_id | concept_id | no | 1 |
| PRIMARY | map_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

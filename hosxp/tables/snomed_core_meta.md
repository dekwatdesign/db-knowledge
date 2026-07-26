# `snomed_core_meta`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| concept_id | varchar(25) | NO | PRI |  |  |  |
| concept_term | varchar(250) | YES | MUL | NULL |  |  |
| effective_date | date | YES |  | NULL |  |  |
| is_active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_core_meta_concept_concept_term | concept_term | no | 1 |
| PRIMARY | concept_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `snomed_concept`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| concept_id | varchar(25) | NO | PRI |  |  |  |
| description_term | varchar(250) | YES | MUL | NULL |  |  |
| semantic_tag | varchar(50) | YES | MUL | NULL |  |  |
| concept_term | varchar(250) | YES | MUL | NULL |  |  |
| effective_date | date | YES |  | NULL |  |  |
| is_active | char(1) | YES |  | NULL |  |  |
| concept_module | varchar(100) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_description_term | description_term | no | 1 |
| ix_module | concept_module | no | 1 |
| ix_module | concept_term | no | 2 |
| ix_snomed_concept_term | concept_term | no | 1 |
| ix_tag | semantic_tag | no | 1 |
| PRIMARY | concept_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `snomed_description`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| snomed_description_id | varchar(25) | NO | PRI |  |  |  |
| concept_id | varchar(25) | YES | MUL | NULL |  |  |
| description_term | varchar(250) | YES | MUL | NULL |  |  |
| semantic_tag | varchar(50) | YES | MUL | NULL |  |  |
| description_id | varchar(25) | YES | MUL | NULL |  |  |
| effective_date | date | YES |  | NULL |  |  |
| is_active | char(1) | YES |  | NULL |  |  |
| concept_module | varchar(100) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_concept_id | concept_id | no | 1 |
| ix_description_term | description_term | no | 1 |
| ix_module | concept_module | no | 1 |
| ix_module | description_term | no | 2 |
| ix_s1 | description_id | no | 1 |
| ix_s1 | concept_id | no | 2 |
| ix_tag | semantic_tag | no | 1 |
| ix_term_tag | description_term | no | 1 |
| ix_term_tag | semantic_tag | no | 2 |
| PRIMARY | snomed_description_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

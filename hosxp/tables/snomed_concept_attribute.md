# `snomed_concept_attribute`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| concept_module | varchar(100) | YES |  | NULL |  |  |
| concept_attribute_id | varchar(25) | NO | PRI |  |  |  |
| source_concept_id | varchar(25) | YES | MUL | NULL |  |  |
| dest_concept_id | varchar(25) | YES | MUL | NULL |  |  |
| description_type_id | varchar(25) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dest | dest_concept_id | no | 1 |
| ix_source | source_concept_id | no | 1 |
| ix_source_dest | source_concept_id | no | 1 |
| ix_source_dest | dest_concept_id | no | 2 |
| ix_source_dest_type | source_concept_id | yes | 1 |
| ix_source_dest_type | dest_concept_id | yes | 2 |
| ix_source_dest_type | description_type_id | yes | 3 |
| ix_source_dest_type_index | description_type_id | yes | 1 |
| ix_source_dest_type_index | dest_concept_id | yes | 2 |
| ix_source_dest_type_index | source_concept_id | yes | 3 |
| PRIMARY | concept_attribute_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

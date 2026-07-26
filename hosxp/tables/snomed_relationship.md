# `snomed_relationship`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| snomed_relationship_id | varchar(25) | NO | PRI |  |  |  |
| effective_time | char(8) | YES |  | NULL |  |  |
| is_active | char(1) | YES | MUL | NULL |  |  |
| module_id | varchar(25) | YES |  | NULL |  |  |
| source_concept_id | varchar(25) | YES | MUL | NULL |  |  |
| dest_concept_id | varchar(25) | YES | MUL | NULL |  |  |
| relationship_group_id | char(1) | YES |  | NULL |  |  |
| type_id | varchar(25) | YES |  | NULL |  |  |
| char_type_id | varchar(25) | YES |  | NULL |  |  |
| modifier_id | varchar(25) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dest | dest_concept_id | no | 1 |
| ix_is_active | is_active | no | 1 |
| ix_source | source_concept_id | no | 1 |
| ix_source_dest | source_concept_id | no | 1 |
| ix_source_dest | dest_concept_id | no | 2 |
| ix_source_dest_index | dest_concept_id | no | 1 |
| ix_source_dest_index | source_concept_id | no | 2 |
| ix_source_dest_type | source_concept_id | no | 1 |
| ix_source_dest_type | dest_concept_id | no | 2 |
| ix_source_dest_type | type_id | no | 3 |
| ix_source_dest_type_index | dest_concept_id | no | 1 |
| ix_source_dest_type_index | source_concept_id | no | 2 |
| ix_source_dest_type_index | type_id | no | 3 |
| PRIMARY | snomed_relationship_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `pt_medplan_audit_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pt_medplan_audit_log_id | int(11) | NO | PRI | 0 |  |  |
| entity_type | varchar(10) | YES |  | NULL |  |  |
| entity_pk | int(11) | YES | MUL | NULL |  |  |
| action | varchar(10) | YES |  | NULL |  |  |
| actor_id | varchar(50) | YES |  | NULL |  |  |
| at_time | datetime | YES | MUL | NULL |  |  |
| diff_json | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_audit_entity | entity_pk | no | 1 |
| ix_idx_audit_entity | entity_type | no | 2 |
| ix_idx_audit_time | at_time | no | 1 |
| PRIMARY | pt_medplan_audit_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

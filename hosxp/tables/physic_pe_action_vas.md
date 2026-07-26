# `physic_pe_action_vas`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_action_vas_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_action_vas_date | date | YES | MUL | NULL |  |  |
| physic_pe_action_vas_count | int(11) | YES | MUL | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| physic_pe_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_pe_action_vas_count | physic_pe_action_vas_count | no | 1 |
| ix_idx_physic_pe_action_vas_date | physic_pe_action_vas_date | no | 1 |
| ix_idx_physic_pe_action_vas_pe_id | physic_pe_id | no | 1 |
| PRIMARY | physic_pe_action_vas_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

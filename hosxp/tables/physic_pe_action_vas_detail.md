# `physic_pe_action_vas_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_action_vas_detail_id | int(11) | NO | PRI | 0 |  |  |
| action_vas_doing | varchar(250) | YES |  | NULL |  |  |
| action_vas_after | varchar(250) | YES |  | NULL |  |  |
| physic_pe_action_vas_id | int(11) | YES | MUL | NULL |  |  |
| physic_pe_action_vas_test_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_pe_action_vas_detail_test | physic_pe_action_vas_test_id | no | 1 |
| ix_idx_physic_pe_action_vas_detail_vas | physic_pe_action_vas_id | no | 1 |
| PRIMARY | physic_pe_action_vas_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

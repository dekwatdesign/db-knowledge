# `stretcher_team_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stretcher_team_list_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(255) | YES |  | NULL |  |  |
| stretcher_team_list_doctor | varchar(7) | YES | MUL | NULL |  |  |
| stretcher_team_list_active | char(1) | YES |  | NULL |  |  |
| stretcher_team_position_id | int(11) | YES | MUL | NULL |  |  |
| stretcher_team_policy_accept | char(1) | YES |  | NULL |  |  |
| stretcher_team_pincode | char(6) | YES |  | NULL |  |  |
| stretcher_team_fcm_token | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_stretcher_team_list_doctor | stretcher_team_list_doctor | no | 1 |
| ix_idx_stretcher_team_list_position | stretcher_team_position_id | no | 1 |
| PRIMARY | stretcher_team_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

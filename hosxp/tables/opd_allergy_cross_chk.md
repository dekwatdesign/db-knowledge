# `opd_allergy_cross_chk`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_allergy_cross_chk_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| agent | varchar(250) | YES | MUL | NULL |  |  |
| cross_agent | varchar(250) | YES |  | NULL |  |  |
| allow_order | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn_agent | hn | no | 1 |
| ix_hn_agent | agent | no | 2 |
| ix_hn_agent_index | agent | no | 1 |
| ix_hn_agent_index | hn | no | 2 |
| PRIMARY | opd_allergy_cross_chk_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

# `blb_cross_donor_unit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_cross_donor_unit_id | int(11) | NO | PRI | 0 |  |  |
| blb_cross_donor_sample | varchar(255) | YES |  | NULL |  |  |
| blb_ax_rt | varchar(20) | YES |  | NULL |  |  |
| blb_ax_37c | varchar(20) | YES |  | NULL |  |  |
| blb_ax_iat | varchar(20) | YES |  | NULL |  |  |
| blb_bx_rt | varchar(20) | YES |  | NULL |  |  |
| blb_bx_37c | varchar(20) | YES |  | NULL |  |  |
| blb_bx_iat | varchar(20) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| blb_transfusion_react_id | int(11) | YES | MUL | NULL |  |  |
| blb_ax_gel | varchar(20) | YES |  | NULL |  |  |
| blb_bx_gel | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refblb_transfusion_react3 | blb_transfusion_react_id | no | 1 |
| PRIMARY | blb_cross_donor_unit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

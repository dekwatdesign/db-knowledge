# `psych_assess_strain`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_assess_strain_id | int(11) | NO | PRI | 0 |  |  |
| vnan | varchar(13) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| psych_assess_strain_date | date | YES |  | NULL |  |  |
| psych_assess_strain_sleepless | char(1) | YES |  | NULL |  |  |
| psych_assess_strain_edgy | char(1) | YES |  | NULL |  |  |
| psych_assess_strain_nothing | char(1) | YES |  | NULL |  |  |
| psych_assess_strain_flurry | char(1) | YES |  | NULL |  |  |
| psych_assess_strain_dontmeet | char(1) | YES |  | NULL |  |  |
| psych_assess_strain_headache | char(1) | YES |  | NULL |  |  |
| psych_assess_strain_unhappy | char(1) | YES |  | NULL |  |  |
| psych_assess_strain_desperate | char(1) | YES |  | NULL |  |  |
| psych_assess_strain_worthless | char(1) | YES |  | NULL |  |  |
| psych_assess_strain_anxious | char(1) | YES |  | NULL |  |  |
| psych_assess_strain_nomeditt | char(1) | YES |  | NULL |  |  |
| psych_assess_strain_tired | char(1) | YES |  | NULL |  |  |
| psych_assess_strain_betried | char(1) | YES |  | NULL |  |  |
| psych_assess_strain_heartbeat | char(1) | YES |  | NULL |  |  |
| psych_assess_strain_vibrate | char(1) | YES |  | NULL |  |  |
| psych_assess_strain_mistake | char(1) | YES |  | NULL |  |  |
| psych_assess_strain_pain | char(1) | YES |  | NULL |  |  |
| psych_assess_strain_excited | char(1) | YES |  | NULL |  |  |
| psych_assess_strain_numb | char(1) | YES |  | NULL |  |  |
| psych_assess_strain_happydown | char(1) | YES |  | NULL |  |  |
| psych_assess_strain_sum | int(11) | YES |  | NULL |  |  |
| psych_assess_strain_text | text | YES |  | NULL |  |  |
| staff_assess | varchar(50) | YES |  | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |
| date_entry | datetime | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_vnan | vnan | no | 1 |
| PRIMARY | psych_assess_strain_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

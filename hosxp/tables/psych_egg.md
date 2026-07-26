# `psych_egg`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_egg_id | int(11) | NO | PRI | 0 |  |  |
| vn_an | varchar(13) | YES | MUL | NULL |  |  |
| psych_egg_date | date | YES |  | NULL |  |  |
| psych_egg_join_chk | char(1) | YES |  | NULL |  |  |
| psych_egg_need_chk | char(1) | YES |  | NULL |  |  |
| psych_egg_understand_chk | char(1) | YES |  | NULL |  |  |
| psych_egg_worry_chk | char(1) | YES |  | NULL |  |  |
| psych_egg_intro_chk | char(1) | YES |  | NULL |  |  |
| psych_egg_objective_chk | char(1) | YES |  | NULL |  |  |
| psych_egg_step_tx_chk | char(1) | YES |  | NULL |  |  |
| psych_egg_photo_note_chk | char(1) | YES |  | NULL |  |  |
| psych_egg_behave_chk | char(1) | YES |  | NULL |  |  |
| psych_egg_summary_note_chk | char(1) | YES |  | NULL |  |  |
| psych_egg_question_chk | char(1) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| date_entry | date | YES |  | NULL |  |  |
| staff_assessment | varchar(50) | YES |  | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn_an | vn_an | no | 1 |
| PRIMARY | psych_egg_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

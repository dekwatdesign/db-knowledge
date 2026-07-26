# `person_chanthaburi_elder_club_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_chanthaburi_elder_club_summary_id | int(11) | NO | PRI | 0 |  |  |
| village_id | int(11) | YES |  | NULL |  |  |
| person_chanthaburi_elder_club_summary_goal | int(11) | YES |  | NULL |  |  |
| person_chanthaburi_elder_club_summary_result | int(11) | YES |  | NULL |  |  |
| person_chanthaburi_elder_club_summary_percent | float | YES |  | NULL |  |  |
| survey_chanthaburi_year_id | int(11) | YES |  | NULL |  |  |
| person_chanthaburi_elder_club_summary_status | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | person_chanthaburi_elder_club_summary_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

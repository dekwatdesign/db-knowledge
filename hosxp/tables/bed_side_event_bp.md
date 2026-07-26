# `bed_side_event_bp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bed_side_event_bp_id | int(11) | NO | PRI | 0 |  |  |
| bedno | varchar(6) | YES |  | NULL |  |  |
| anvn | varchar(12) | YES | MUL | NULL |  |  |
| event_datetime | datetime | YES |  | NULL |  |  |
| event_no | varchar(25) | YES |  | NULL |  |  |
| bps | int(11) | YES |  | NULL |  |  |
| bpd | int(11) | YES |  | NULL |  |  |
| bpm | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an_eventno | anvn | no | 1 |
| ix_an_eventno | event_no | no | 2 |
| ix_an_eventnobn | anvn | no | 1 |
| ix_an_eventnobn | bedno | no | 2 |
| ix_an_eventnobn | event_no | no | 3 |
| PRIMARY | bed_side_event_bp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```

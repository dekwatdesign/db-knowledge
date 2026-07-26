# `replicate_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| event_id | int(11) | NO | PRI | NULL | auto_increment |  |
| event_time | datetime | YES |  | NULL |  |  |
| client | varchar(20) | YES |  | NULL |  |  |
| sql | longtext | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| event_id_unique | event_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "event_id": 297410501,
    "event_time": "2026-06-04 12:15:00",
    "client": "A56-0114",
    "sql": "delete from serial where serial_no is null"
  },
  {
    "event_id": 297410502,
    "event_time": "2026-06-04 12:15:00",
    "client": "A56-0114",
    "sql": "delete from entity_code"
  },
  {
    "event_id": 297410503,
    "event_time": "2026-06-04 12:15:00",
    "client": "A56-0114",
    "sql": "delete from nondrugitems where icode='' or icode IS NULL"
  },
  {
    "event_id": 297410504,
    "event_time": "2026-06-04 12:15:00",
    "client": "A56-0114",
    "sql": "delete from drugitems where icode='' or icode IS NULL"
  },
  {
    "event_id": 297410505,
    "event_time": "2026-06-04 12:15:00",
    "client": "A56-0114",
    "sql": "update referout set refer_hospcode = hospcode where (refer_hospcode is null or refer_hospcode='')  and hospcode<>'12251'"
  },
  {
    "event_id": 297410506,
    "event_time": "2026-06-04 12:15:00",
    "client": "A56-0114",
    "sql": "update referin set refer_hospcode = hospcode where (refer_hospcode is null or refer_hospcode='')  and hospcode<>'12251'"
  },
  {
    "event_id": 297410507,
    "event_time": "2026-06-04 12:15:00",
    "client": "A56-0114",
    "sql": "update person_anc_preg_week set week_min_quality = week_min where week_min_quality is null"
  },
  {
    "event_id": 297410508,
    "event_time": "2026-06-04 12:15:00",
    "client": "A56-0114",
    "sql": "update person_anc_preg_week set week_max_quality = week_max where week_max_quality is null"
  }
]
```

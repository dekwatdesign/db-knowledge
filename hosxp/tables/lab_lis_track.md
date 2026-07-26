# `lab_lis_track`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_lis_track_id | int(11) | NO | PRI | 0 |  |  |
| lab_lis_track_datetime | datetime | YES | MUL | NULL |  |  |
| lab_order_number | text | YES |  | NULL |  |  |
| lab_lis_track_type | text | YES |  | NULL |  |  |
| gateway_flag | int(11) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| lab_lis_company_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_gw | gateway_flag | no | 1 |
| ix_gw_flag_id | gateway_flag | no | 1 |
| ix_gw_flag_id | lab_lis_company_id | no | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_lab_lis_track_datetime | lab_lis_track_datetime | no | 1 |
| PRIMARY | lab_lis_track_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "lab_lis_track_id": 1,
    "lab_lis_track_datetime": "2012-11-19 14:36:37",
    "lab_order_number": "4B2A0D7DD0A9EFED5BB1BFE90B1B1679414373CD23B06770FE8E6790FADBF45E93F515D4",
    "lab_lis_track_type": "4B2A0D7DD0A9EFED5BB1BFE90B1B1679414373CD23B06770FE8E6790FADBF45EA3E0628859F18BD52B64E4",
    "gateway_flag": 0,
    "hos_guid": null,
    "lab_lis_company_id": null
  },
  {
    "lab_lis_track_id": 2,
    "lab_lis_track_datetime": "2012-11-19 14:36:57",
    "lab_order_number": "6E7F11604CA90A8BB4E584105F303792E1EB0C1281584972C942391B1318B367EB40B331",
    "lab_lis_track_type": "6E7F11604CA90A8BB4E584105F303792E1EB0C1281584972C942391B1318B367E99AFE3A44E0EC21D52CC8",
    "gateway_flag": 0,
    "hos_guid": null,
    "lab_lis_company_id": null
  },
  {
    "lab_lis_track_id": 3,
    "lab_lis_track_datetime": "2012-11-19 14:37:16",
    "lab_order_number": "D4A17FBD1F9A5564ACB97DFA800CC6EA50FFAA2BF37C42F6CDB3FB445777F540176DBDE1",
    "lab_lis_track_type": "D4A17FBD1F9A5564ACB97DFA800CC6EA50FFAA2BF37C42F6CDB3FB445777F540DC987824F10E7E61CA7FD4",
    "gateway_flag": 0,
    "hos_guid": null,
    "lab_lis_company_id": null
  },
  {
    "lab_lis_track_id": 4,
    "lab_lis_track_datetime": "2012-11-19 14:42:54",
    "lab_order_number": "7DD8BD2A9E0CD38B64780858AF90D19D977763D84C6B049719B62E3B51964FD6ABB779CA",
    "lab_lis_track_type": "7DD8BD2A9E0CD38B64780858AF90D19D977763D84C6B049719B62E3B51964FD604D9416BD95102A84261E2",
    "gateway_flag": 0,
    "hos_guid": null,
    "lab_lis_company_id": null
  },
  {
    "lab_lis_track_id": 5,
    "lab_lis_track_datetime": "2012-11-19 14:43:13",
    "lab_order_number": "B9AD24BC51A70B53471D8DEBCF0784533223DB9AF6267647A978E336723A027C132F2B6D",
    "lab_lis_track_type": "B9AD24BC51A70B53471D8DEBCF0784533223DB9AF6267647A978E336723A027C9E6B3F3E89A259EE9EB54D",
    "gateway_flag": 0,
    "hos_guid": null,
    "lab_lis_company_id": null
  },
  {
    "lab_lis_track_id": 6,
    "lab_lis_track_datetime": "2012-11-19 14:43:29",
    "lab_order_number": "70D6AFA53BFA9ACB905576DD885BEE3ADED53F03ADD0F2799F1A06A2DA16FD2CE91909D3",
    "lab_lis_track_type": "70D6AFA53BFA9ACB905576DD885BEE3ADED53F03ADD0F2799F1A06A2DA16FD2CC70A902E7917800B453A05",
    "gateway_flag": 0,
    "hos_guid": null,
    "lab_lis_company_id": null
  },
  {
    "lab_lis_track_id": 7,
    "lab_lis_track_datetime": "2012-11-19 14:44:18",
    "lab_order_number": "D0E713E2DD460C30886D6E0BB4188E17E52A1E434E2BBB08DAEDF25A7AE97A10DA9591F6",
    "lab_lis_track_type": "D0E713E2DD460C30886D6E0BB4188E17E52A1E434E2BBB08DAEDF25A7AE97A105968C5D57FACFFEDB667BE",
    "gateway_flag": 0,
    "hos_guid": null,
    "lab_lis_company_id": null
  },
  {
    "lab_lis_track_id": 8,
    "lab_lis_track_datetime": "2012-11-30 09:45:11",
    "lab_order_number": "6043B5D6F4493320B9F81B97546352D2A36DA1F800D1682D0DB5E569C2FB064051C4F905",
    "lab_lis_track_type": "6043B5D6F4493320B9F81B97546352D2A36DA1F800D1682D0DB5E569C2FB06403118C55FEA62A33A41755A",
    "gateway_flag": 0,
    "hos_guid": null,
    "lab_lis_company_id": null
  }
]
```

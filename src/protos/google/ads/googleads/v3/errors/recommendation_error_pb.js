var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.errors.RecommendationErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.errors.RecommendationErrorEnum.RecommendationError",null,global),proto.google.ads.googleads.v3.errors.RecommendationErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.errors.RecommendationErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.errors.RecommendationErrorEnum.displayName="proto.google.ads.googleads.v3.errors.RecommendationErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.errors.RecommendationErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.errors.RecommendationErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.errors.RecommendationErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.errors.RecommendationErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.errors.RecommendationErrorEnum;return proto.google.ads.googleads.v3.errors.RecommendationErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.errors.RecommendationErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.errors.RecommendationErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.errors.RecommendationErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.errors.RecommendationErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.errors.RecommendationErrorEnum.RecommendationError={UNSPECIFIED:0,UNKNOWN:1,BUDGET_AMOUNT_TOO_SMALL:2,BUDGET_AMOUNT_TOO_LARGE:3,INVALID_BUDGET_AMOUNT:4,POLICY_ERROR:5,INVALID_BID_AMOUNT:6,ADGROUP_KEYWORD_LIMIT:7,RECOMMENDATION_ALREADY_APPLIED:8,RECOMMENDATION_INVALIDATED:9,TOO_MANY_OPERATIONS:10,NO_OPERATIONS:11,DIFFERENT_TYPES_NOT_SUPPORTED:12,DUPLICATE_RESOURCE_NAME:13,RECOMMENDATION_ALREADY_DISMISSED:14,INVALID_APPLY_REQUEST:15},goog.object.extend(exports,proto.google.ads.googleads.v3.errors);
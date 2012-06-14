//
//  PhoneDialer.h
//
//  Created by Justin McNally on 11/17/11.
//  Copyright (c) 2011 Kohactive. All rights reserved.
//

#import <Foundation/Foundation.h>
#ifdef PHONEGAP_FRAMEWORK
#import <PhoneGap/PGPlugin.h>
#endif
//#else
#ifdef CORDOVA_FRAMEWORK
#import <CORDOVA/CDVPlugin.h>
#endif

#ifdef PHONEGAP_FRAMEWORK
@interface PhoneDialer : PGPlugin 
#endif
//#else
#ifdef CORDOVA_FRAMEWORK
@interface PhoneDialer : CDVPlugin
#endif

- (void) dialPhone:(NSMutableArray *)arguments withDict:(NSMutableDictionary *) options;

@end

